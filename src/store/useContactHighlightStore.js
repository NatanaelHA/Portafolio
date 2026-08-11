import { create } from 'zustand'

const useContactHighlightStore = create((set) => ({
  requestId: 0,
  showContactInformation: () =>
    set((state) => ({ requestId: state.requestId + 1 })),
}))

export default useContactHighlightStore
