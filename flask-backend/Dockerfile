# Stage with Ollama binary
FROM ollama/ollama:latest as ollama

# Final image with Python + Ollama
FROM python:3.10-slim

WORKDIR /app

# Basic tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl && rm -rf /var/lib/apt/lists/*

# Copy Ollama binary from stage
COPY --from=ollama /bin/ollama /bin/ollama

# Python deps
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# App code
COPY . /app

# Models storage (mounted volume on Railway)
ENV OLLAMA_MODELS=/root/.ollama
# Ollama must bind to 0.0.0.0 for Railway; port provided by entrypoint
ENV OLLAMA_HOST=0.0.0.0:11434

# Expose typical ports (Railway will map $PORT for Flask)
EXPOSE 5000
EXPOSE 11434

# Entrypoint script starts Ollama, pulls model (if set), then runs gunicorn
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]
