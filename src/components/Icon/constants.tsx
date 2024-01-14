export type IconName = 'bookmarkOn' | 'bookmarkOff' | 'darkMode' | 'lightMode' | 'colorPicker';

export type IconPaths = {
  d: string;
  fillRule: 'evenodd' | 'nonzero';
  clipRule: 'evenodd' | 'nonzero';
};

export const IconSet: Record<IconName, IconPaths> = {
  bookmarkOn: {
    d: 'M5 0.937596C5 0.419775 5.41574 0 5.92857 0H30.0714C30.5843 0 31 0.419776 31 0.937596V35.0605C31 35.9198 29.9505 36.3264 29.3812 35.6877L18.6902 23.6934C18.3213 23.2795 17.6787 23.2795 17.3098 23.6934L6.61877 35.6877C6.04947 36.3264 5 35.9198 5 35.0605V0.937596Z',
    fillRule: 'nonzero',
    clipRule: 'nonzero'
  },
  bookmarkOff: {
    d: 'M8.71429 3.75039V27.7305L14.549 21.1845C16.3933 19.1153 19.6067 19.1153 21.451 21.1845L27.2857 27.7305V3.75039H8.71429ZM31 0.937596C31 0.419776 30.5843 0 30.0714 0H5.92857C5.41574 0 5 0.419775 5 0.937596V35.0605C5 35.9198 6.04947 36.3264 6.61877 35.6877L17.3098 23.6934C17.6787 23.2795 18.3213 23.2795 18.6902 23.6934L29.3812 35.6877C29.9505 36.3264 31 35.9198 31 35.0605V0.937596Z',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  },
  darkMode: {
    d: 'M18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36ZM18 32V4C25.732 4 32 10.268 32 18C32 25.732 25.732 32 18 32Z',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  },
  lightMode: {
    d: 'M36 18C36 27.9411 27.9412 35.9999 18.0001 36C18.0001 36 18 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C18 0 18.0001 0 18.0001 0C27.9412 5.7725e-05 36 8.05891 36 18ZM18.0001 4C18.0001 4 18 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C18 32 18.0001 32 18.0001 32V4Z',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  },
  colorPicker: {
    d: 'M15.7764 2.70721C14.5351 1.64296 12.922 1 11.1587 1C7.23881 1 4.06114 4.17732 4.06114 8.09674C4.06114 9.85987 4.70418 11.4728 5.76855 12.7139L0.527036 17.9549C-0.175679 18.6575 -0.175678 19.7967 0.527037 20.4993L14.0421 34.0129C14.246 34.2168 14.4866 34.3615 14.7426 34.447C15.3692 34.6566 16.0882 34.5119 16.5872 34.013L30.0355 20.5662L30.058 20.5433L32.1095 18.4921C32.8122 17.7894 32.8122 16.6502 32.1095 15.9476L18.5944 2.43398C17.8917 1.73135 16.7524 1.73135 16.0496 2.43398L15.7764 2.70721ZM13.2163 5.26705L8.32867 10.1541C7.9081 9.57671 7.65997 8.8657 7.65997 8.09673C7.65997 6.16467 9.22639 4.59843 11.1587 4.59843C11.9277 4.59843 12.6388 4.84653 13.2163 5.26705ZM4.66215 18.9091L17.322 6.25069L28.2924 17.2198L27.9742 17.538L4.66215 18.9091ZM33.161 27.9676C34.7289 27.9676 36 26.6967 36 25.1289C36 24.0543 34.6662 22.1189 33.827 21.0076C33.4889 20.5598 32.8331 20.5598 32.4949 21.0076C31.6558 22.1189 30.322 24.0543 30.322 25.1289C30.322 26.6967 31.593 27.9676 33.161 27.9676Z',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  }
};
