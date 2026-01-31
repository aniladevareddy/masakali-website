import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./TopNavbar.css";
import logo from "../../assets/img/logo.png"; // use your logo (or Lezzatos-like one)

const nav = [
  { label: "Home", to: "/" },
  {
    label: "Our Menu",
    to: "/menu"
  },
  { label: "Reservation", to: "/reservation" }, // or open modal
  { label: "Catering", to: "/catering" },
  {
    label: "About us",
    to: "/aboutus",
  },
  {
      label: "Contact Us", 
      to: "/contact" 

  }
];

export default function TopNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // for mobile
  const headerRef = useRef(null);

  // close on route change/backdrop click feel
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close when clicking outside
  useEffect(() => {
    const onDoc = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    setOpenDropdown(null);
  };

  return (
    <header className="lz-header" ref={headerRef}>
      <div className="lz-container">
        {/* LEFT: logo */}
        <Link to="/" className="lz-logo" aria-label="Go to home">
          <img src={logo} alt="Logo" />
        </Link>

        {/* RIGHT: nav */}
        <nav className={`lz-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Menu">
          <ul className="lz-menu">
            {nav.map((item) => {
              const hasChildren = !!item.children?.length;

              // Desktop: hover opens via CSS.
              // Mobile: click toggles dropdown.
              return (
                <li
                  key={item.label}
                  className={`lz-item ${hasChildren ? "has-sub" : ""} ${
                    openDropdown === item.label ? "sub-open" : ""
                  }`}
                >
                  {item.to === "#" ? (
                    <button
                      type="button"
                      className="lz-link lz-btnlink"
                      onClick={() =>
                        setOpenDropdown((v) => (v === item.label ? null : item.label))
                      }
                      aria-haspopup={hasChildren ? "true" : undefined}
                      aria-expanded={openDropdown === item.label ? "true" : "false"}
                    >
                      {item.label}
                      {hasChildren && <span className="lz-caret">▾</span>}
                    </button>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `lz-link ${isActive ? "active" : ""}`
                      }
                      onClick={() => {
                        // If it's a dropdown parent on mobile, toggle instead of navigating
                        if (hasChildren && window.innerWidth <= 920) {
                          setOpenDropdown((v) => (v === item.label ? null : item.label));
                        } else {
                          setMobileOpen(false);
                          setOpenDropdown(null);
                        }
                      }}
                      aria-haspopup={hasChildren ? "true" : undefined}
                    >
                      {item.label}
                      {hasChildren && <span className="lz-caret">▾</span>}
                    </NavLink>
                  )}

                  {hasChildren && (
                    <ul className="lz-sub">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <NavLink
                            to={c.to}
                            className="lz-sub-link"
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* burger */}
        <button
          type="button"
          className={`lz-burger ${mobileOpen ? "is-open" : ""}`}
          onClick={toggleMobile}
          aria-label="Menu Toggle"
          aria-expanded={mobileOpen ? "true" : "false"}
        >
          <span />
          <span />
          <span />
        </button>

        {/* backdrop (mobile) */}
        {mobileOpen && <div className="lz-backdrop" onClick={toggleMobile} />}
      </div>
    </header>
  );
}
