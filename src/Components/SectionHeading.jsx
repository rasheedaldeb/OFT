/* eslint-disable react/prop-types */
const SectionHeading = ({ title, title2 }) => {
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-primary font-semibold ">
        {title} <span className="text-gray-500">{title2}</span>
      </h1>
    </div>
  );
};

export default SectionHeading;
