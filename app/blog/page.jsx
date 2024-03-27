import Blog from "@/components/blog";
import Sidebar from "@/components/sidebar/Sidebar";
export const metadata = {
  title: "Blog ",
};
const index = () => {
  return (
    <>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Blog />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
