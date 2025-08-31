FROM python:3.10-slim

WORKDIR /app

# system basics
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# copy your app code
COPY . /app

# env defaults (Railway will inject PORT)
ENV PORT=5000
EXPOSE 5000

# use gunicorn for prod serving
CMD ["bash", "-lc", "exec gunicorn -w 2 -k gthread -b 0.0.0.0:$PORT app:app"]
