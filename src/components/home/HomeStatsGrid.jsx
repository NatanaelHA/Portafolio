const HomeStatsGrid = ({ stats }) => {
  return (
    <section className='mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4'>
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className='rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm'
        >
          <p className='text-lg font-black text-slate-900'>{value}</p>
          <p className='mt-1 text-[11px] text-slate-500'>{label}</p>
        </div>
      ))}
    </section>
  )
}

export default HomeStatsGrid
