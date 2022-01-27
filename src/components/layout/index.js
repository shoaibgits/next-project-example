import Header from "../header";
import Footer from "../footer";

function Layout({children}) {
    return (
        <div class="main">
            <Header />
                <div className="min-h-screen">
                    {children}
                </div>
            <Footer />
        </div>
    )
}
export  default Layout