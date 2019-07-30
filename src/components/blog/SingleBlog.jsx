import React, {PureComponent} from 'react';
import BlogPost from './BlogPost';
import Footer from '../footer';
import Header from '../header';


export default class SingleBlog extends PureComponent {
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/NavBar.jsx */}
                <Header />
                {/* BlogPost: src/components/Blog/BlogPost.jsx */}
                <BlogPost />
                {/* Footer: src/components/Footer.jsx */}
                <Footer />
            </React.Fragment>
        );
      }
    
}

