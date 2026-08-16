import { create } from 'zustand'

// Puente entre el card que selecciona un proyecto y el modal que lo presenta.
const useProjectModalStore = create((set) => ({
  selectedProject: null,
  openProject: (project) => set({ selectedProject: project }),
  closeProject: () => set({ selectedProject: null }),
}))

export default useProjectModalStore
