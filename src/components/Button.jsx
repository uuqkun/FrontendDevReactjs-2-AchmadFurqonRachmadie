const Button = ({
  text = "learn more",
  color = "text-white",
  bgColor = "bg-accent-blue",
  addClass,
  clicked,
}) => {
  return (
    <button
      className={`btn-base ${color} ${bgColor} ${addClass}`}
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default Button;
