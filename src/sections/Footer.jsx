import Link from "../components/Link";
export default () => {
  return (
    <footer className="bg-[#FFF8F0]">
      <div className="container py-10 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-y-10  lg:place-items-center">
        <div>
          <h4 className="text-2xl text-primary font-bold mb-4">
            Zing<span className="text-secondary">.</span>
          </h4>
          <div className="text-primary space-y-2">
            <p>4517 Washington Ave.</p>
            <p> Manchester, Kentucky</p>
            <p>39495</p>
          </div>
        </div>
        <div>
          <h4 className="text-2xl text-primary font-bold mb-4">Quick links </h4>
          <ul className="text-primary space-y-2 capitalize">
            <li>
              <Link text="gallery" href="/" />
            </li>
            <li>
              <Link text="about us" href="/" />
            </li>
            <li>
              <Link text="buy online" href="/" />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl text-primary font-bold mb-4">Policy </h4>
          <ul className="text-primary space-y-2 capitalize">
            <li>
              <Link text="terms & conditions" href="/" />
            </li>
            <li>
              <Link text="Privacy policy" href="/" />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl text-primary font-bold mb-4">Social</h4>
          <ul className="text-primary space-y-2 capitalize">
            <li>
              <Link text="facebook" href="/" />
            </li>
            <li>
              <Link text="instagram" href="/" />
            </li>
            <li>
              <Link text="linkedIN" href="/" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container text-sm text-primary text-center py-4">
        Copyright ©2022 Zing Inc. All right reserved.
      </div>
    </footer>
  );
};
