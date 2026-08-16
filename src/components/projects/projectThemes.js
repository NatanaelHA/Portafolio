export const projectThemes = {
  aws: {
    card: {
      container: 'border-amber-300/40 bg-slate-950 text-white',
      badge: 'bg-amber-400/10 text-amber-300 border-amber-300/20',
      title: 'text-white',
      description: 'text-slate-300',
      glow: 'rgba(251, 191, 36, 0.22)',
      button: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
    },
    modal: {
      button: 'bg-amber-400 text-slate-950 hover:bg-amber-300',
      dot: 'bg-amber-400',
      frame: 'border-amber-200',
      surface: 'bg-linear-to-br from-white via-white to-amber-50',
      accent: 'from-amber-300 via-amber-400 to-orange-500',
    },
  },

  route: {
    card: {
      container: 'border-emerald-200 bg-emerald-50/40 text-slate-900',
      badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      title: 'text-slate-900',
      description: 'text-slate-600',
      glow: 'rgba(52, 211, 153, 0.22)',
      button: 'bg-emerald-600 text-white hover:bg-emerald-500',
    },
    modal: {
      button: 'bg-emerald-600 text-white hover:bg-emerald-500',
      dot: 'bg-emerald-500',
      frame: 'border-emerald-200',
      surface: 'bg-linear-to-br from-white via-white to-emerald-50',
      accent: 'from-emerald-300 via-emerald-500 to-cyan-500',
    },
  },

  commerce: {
    card: {
      container: 'border-violet-200 bg-violet-50/30 text-slate-900',
      badge: 'bg-violet-100 text-violet-700 border-violet-200',
      title: 'text-slate-900',
      description: 'text-slate-600',
      glow: 'rgba(167, 139, 250, 0.22)',
      button: 'bg-violet-600 text-white hover:bg-violet-500',
    },
    modal: {
      button: 'bg-violet-600 text-white hover:bg-violet-500',
      dot: 'bg-violet-500',
      frame: 'border-violet-200',
      surface: 'bg-linear-to-br from-white via-white to-violet-50',
      accent: 'from-violet-300 via-violet-500 to-fuchsia-500',
    },
  },

  dashboard: {
    card: {
      container: 'border-cyan-200 bg-cyan-50/30 text-slate-900',
      badge: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      title: 'text-slate-900',
      description: 'text-slate-600',
      glow: 'rgba(34, 211, 238, 0.22)',
      button: 'bg-cyan-600 text-white hover:bg-cyan-500',
    },
    modal: {
      button: 'bg-cyan-600 text-white hover:bg-cyan-500',
      dot: 'bg-cyan-500',
      frame: 'border-cyan-200',
      surface: 'bg-linear-to-br from-white via-white to-cyan-50',
      accent: 'from-cyan-300 via-cyan-500 to-blue-500',
    },
  },
}

export const getProjectTheme = (variant) =>
  projectThemes[variant] || projectThemes.dashboard
