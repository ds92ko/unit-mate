import { Bookmark, ColorPicker, ColorMode } from '@/components/Icon/index';

function Basic() {
  return (
    <div>
      Basic
      <Bookmark
        width={14}
        height={20}
        fillColor="#fff"
        strokeColor="#121212"
      />
      <ColorPicker
        width={48}
        height={46}
        fillColor="#fff"
        strokeColor="#121212"
      />
      <ColorMode
        width={36}
        height={36}
        fillColor="#121212"
      />
    </div>
  );
}

export default Basic;
