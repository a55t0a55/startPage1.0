const Search=()=>{
    return (
        <section className="searchSection">
   <form className="searchForm" action="https://www.google.com/search"  method="get" name="searchform" target="_blank" >
       <input autocomplete="on"  name="q" placeholder="Search" required="required"  type="text"></input>
   </form>
   </section>
    )
}

export default Search;