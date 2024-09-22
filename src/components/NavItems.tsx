import type { Navigation } from '@toolpad/core'
import {
  Dashboard,
  Info,
  Analytics,
  QueryStats,
  Schema,
} from '@mui/icons-material'
const navItems: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <Dashboard />,
  },
  {
    segment: 'flow',
    title: 'Flow',
    icon: <Schema />,
  },
  {
    segment: 'about',
    title: 'About Me',
    icon: <Info />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <Analytics />,
    children: [
      {
        segment: 'usage',
        title: 'Usage',
        icon: <QueryStats />,
      },
    ],
  },
]
export default navItems
