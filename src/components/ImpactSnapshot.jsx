import { impactStats } from '../data/site.js';

export default function ImpactSnapshot() {
  return (
    <section className="border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="page py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Impact Snapshot</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Fast signals for recruiters and engineering teams evaluating AI, product, and leadership scope.
          </p>
        </div>
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className="border-l-2 border-blue-600 pl-4">
              <dt className="text-3xl font-bold text-gray-950 dark:text-white">{stat.value}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
