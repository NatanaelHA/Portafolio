import { create } from 'zustand'

// El contador permite solicitar la animación repetidamente; un booleano no
// produciría un nuevo cambio de estado después de la primera activación.
const useContactHighlightStore = create((set) => ({
  requestId: 0,
  showContactInformation: () =>
    set((state) => ({ requestId: state.requestId + 1 })),
}))

export default useContactHighlightStore
