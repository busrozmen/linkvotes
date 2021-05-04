import React, {useState, useEffect} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './PaginationWrapper.css'
import _ from 'lodash';

const PaginationWrapper = (props) => {
  const [pageCount, setPageCount] = useState(0);
  const [pagesList, setPagesList] = useState([]);
  const {links ,page, pageHandler} = props;

  useEffect(() => {
    setPageCount(parseInt(links.length / 2)+1);
    setPagesList(_.range(1,pageCount+1));
  }, [links,pageCount])

    return (
      <div>
      {
        pagesList.length >0 && (
      <Pagination>
        <PaginationItem className={page <= 1 ? 'disabled' : ''}>
          <PaginationLink first onClick={()=> pageHandler(1)} />
        </PaginationItem>
          <PaginationItem className={page <= 1 ? 'disabled' : ''}>
           {page > 1  &&   <PaginationLink previous onClick={()=> pageHandler(page-1)} /> }
          </PaginationItem>     
        {  pagesList.map((pageNumber)=>(
          <PaginationItem key={pageNumber} className={page === pageNumber ? 'active' : ''} >
            <PaginationLink onClick={()=> pageHandler(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem> 
        ))}
          <PaginationItem className={page >= pageCount ? 'disabled' : ''}>
          {page < pageCount && <PaginationLink next onClick={()=> pageHandler(page+1)} /> }  
          </PaginationItem>

        <PaginationItem className={page >= pageCount ? 'disabled' : ''}>
          <PaginationLink last onClick={()=> pageHandler(pageCount)} />
        </PaginationItem>
      </Pagination>
      )}
      </div>
    );
  }

export default PaginationWrapper