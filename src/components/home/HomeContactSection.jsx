import useContactHighlightStore from '../../store/useContactHighlightStore'

const HomeContactSection = () => {
  const showContactInformation = useContactHighlightStore(
    (state) => state.showContactInformation,
  )

  return (
    <section className='mt-20 rounded-[3rem] bg-slate-900 p-12 text-center text-white'>
      <h2 className='mb-4 text-3xl font-bold'>
        ¿Tienes una propuesta en mente?
      </h2>
      <p className='mx-auto mb-8 max-w-md text-slate-400'>
        Estoy disponible para nuevas oportunidades y colaboraciones técnicas.
      </p>
      <button
        type='button'
        onClick={showContactInformation}
        className='rounded-2xl bg-blue-600 px-10 py-4 font-bold text-white transition-colors hover:bg-blue-500'
      >
        Hablemos
      </button>
    </section>
  )
}

export default HomeContactSection
