import { Footer } from "flowbite-react";
import Logo from "@/assets/images/Harkh.png"
const FooterSection = () => {
    return (
        <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
            className="w-[130px] h-[130px]"
              href=""
              src={Logo}
              alt="Harkh Logo"
              name="Harkh"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Harkh" year={2024} />
        </div>
      </Footer>
    );
}
export default FooterSection
