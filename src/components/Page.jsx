import  React  from 'react';

const Page = ( {header, children, aside , footer}) => {
   return(

    <div className="page">
       <aside>{aside}</aside>
       <header>{header}</header>
       <main>{children}</main>
       <footer>{footer}</footer>
    </div>

   )

}

export default Page;