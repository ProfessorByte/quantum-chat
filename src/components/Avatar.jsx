import PropTypes from "prop-types";

export function Avatar({ children }) {
  return (
    <figure className="w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gptlogo">
      {children}
    </figure>
  );
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
};
