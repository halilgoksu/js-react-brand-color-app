import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GrLinkPrevious } from "react-icons/gr";
import Download from "./Download";
import LazyLoad from "react-lazyload";
import Brand from "./Brand";
import MainContext from "../MainContext";
import Loader from "./Loader";

function Collection(props) {
  const { slugs } = useParams();
  const history = useNavigate();
  const { setSelectedBrands, selectedBrands, setSearch, brands } =
    useContext(MainContext);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    setSearch("");
    history.push("/");
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands}>
          <a className="back-btn">
            <GrLinkPrevious />
            All Brands
          </a>
        </Link>

        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}

export default Collection;
