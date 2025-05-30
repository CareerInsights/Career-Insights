import { Link } from "react-router-dom";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="
        text-gray-800
        font-medium
        relative
        after:content-['']
        after:absolute
        after:bottom-0
        after:left-0
        after:w-full
        after:h-0.5
        after:bg-gradient-to-r
        after:from-orange-500
        after:to-purple-500
        after:scale-x-0
        hover:after:scale-x-100
        after:transition-transform
        after:duration-300
        after:origin-left
      "
    >
      {children}
    </Link>
  );
}
