function SkillCard({ name, category }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10">
      <h3 className="text-lg font-semibold text-white">
        {name}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {category}
      </p>
    </div>
  );
}

export default SkillCard;