import { create } from 'zustand'

const useProjectModalStore = create((set) => ({
  selectedProject: null,
  openProject: (project) => set({ selectedProject: project }),
  closeProject: () => set({ selectedProject: null }),
}))

export default useProjectModalStore
