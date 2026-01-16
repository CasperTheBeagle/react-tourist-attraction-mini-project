function Tag({ label, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(label);
    }
  };

  return (
    <span
      onClick={handleClick}
      className="text-gray-500 underline cursor-pointer hover:text-cyan-500 transition-colors"
    >
      {label}
    </span>
  );
}

export default Tag;
