// config/navigation.ts

export interface NavSubmenuItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  submenu?: NavSubmenuItem[];
}

export const navItems: NavItem[] = [
  {
    label: 'About',
    href: '#about',
    submenu: [
      { label: 'Our Story', href: '#about' },
      { label: 'Opportunities', href: '#facilities' },
      { label: 'Get in Touch', href: '#contact' },
      { label: 'Help Center', href: '#news' },
    ],
  },
  {
    label: 'Admission',
    href: '#apply',
    submenu: [
      { label: 'How to Get Admitted?', href: '#apply' },
      { label: 'Apply Online', href: '#apply' },
      { label: 'Tuition & Fees', href: '#academics' },
    ],
  },
  {
    label: 'Academic',
    href: '#academics',
    submenu: [
      { label: 'Programs & Courses', href: '#academics' },
      { label: 'Academic Resources', href: '#academics' },
      { label: 'Student Guidelines', href: '#academics' },
      { label: 'Classrooms & Facilities', href: '#facilities' },
      { label: 'Clubs & Activities', href: '#testimonials' },
    ],
  },
  {
    label: 'Administration',
    href: '#news',
    submenu: [
      { label: 'Meet the Leadership', href: '#news' },
      { label: 'Explore Faculty', href: '#academics' },
      { label: 'Connect with Staff', href: '#news' },
      { label: 'Access Departments', href: '#academics' },
    ],
  },
  {
    label: 'Campus',
    href: '#hero',
    submenu: [
      { label: 'Explore Media', href: '#hero' },
      { label: 'Read the Blog', href: '#news' },
      { label: 'View Gallery', href: '#hero' },
    ],
  },
  { label: 'Notice Board', href: '#news' },
];
