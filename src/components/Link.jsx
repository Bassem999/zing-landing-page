export default ({ text, href }) => {
  return (
    <a href={href} className="text -sm capitalize text-primary group relative">
      {text}
      <span className="h-0 bg-secondary/30 group-hover:h-1/2  duration-300 absolute -bottom-0 inset-x-0"></span>
    </a>
  );
};
