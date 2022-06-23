import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Record } from "../../components/Record";
import {Pagination} from "../../components/Pagination";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  padding-top: 20px;
`

const RecordsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
`

const StatusText = styled.div`
  text-align: center;
`

const TOTAL_PAGE_NUMBER = 10;

const RecordsPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await fetch(`https://api.unsplash.com/photos?page=${currentPage}`, {
                headers: {
                    'Authorization': `Client-ID ${process.env.REACT_APP_ACCESS_TOKEN}`
                }
            })
                .then(data => data.json())

            setRecords(data);
            setIsLoading(false);
        }

        fetchData().catch((e) => {
            console.error(e)
            setError(e.message)
        });
    }, [currentPage])

    const changePage = e => {
        setCurrentPage(e.selected)
    }

    return (
        <Container>
            <Pagination currentPage={currentPage} totalPages={TOTAL_PAGE_NUMBER} setPage={changePage} />
            {
                <>
                    <StatusText>
                        {isLoading && <h3>Loading...</h3>}
                        {error && <h3>Error: {error}</h3>}
                    </StatusText>

                    {
                        !isLoading && !error && !!records.length &&
                        <RecordsList>
                            {records.map(record => <Record img={record.urls.small} href={record.urls.full}/>)}
                        </RecordsList>
                    }
                </>
            }
        </Container>
    )
}

export { RecordsPage }