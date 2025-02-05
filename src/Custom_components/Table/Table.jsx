const Table = () =>{
    return (
        <>
        <h1>Table data:</h1>
        <table border={1} cellSpacing={0}>
            <thead>
                <tr>
                     {headings.map((heading,index)=>{

                     }))
                    }
                </tr>
            </thead>
            <tbody>
                        {Data.map(row,index)=>
                        (
                            <>
                            <tr key={row}></tr>
                            </>
                        )};
            </tbody>
        </table>
        </>
    )
}
export default Table;