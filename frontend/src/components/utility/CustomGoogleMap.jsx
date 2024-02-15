/* eslint-disable react/prop-types */
const CustomGoogleMap = ({ width, height }) => {
  return (
    <iframe
      style={{
        width: width,
        height: height,
      }}
      className="rounded-xl"
      frameBorder="0"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Servcorp%20Roshn%20Front+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
      <a href="https://www.gps.ie/">gps systems</a>
    </iframe>
  );
};

export default CustomGoogleMap;
