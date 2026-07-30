function EducationCard({
  institute,
  degree,
  duration,
  score,
  description,
}) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
      <p className="text-sm font-medium text-cyan-400">
        {duration}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        {degree}
      </h3>

      <h4 className="mt-1 text-lg text-slate-300">
        {institute}
      </h4>

      <p className="mt-2 font-medium text-slate-200">
        {score}
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </article>
  );
}

export default EducationCard;