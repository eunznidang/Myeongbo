import React, { useState } from 'react';
import styled from 'styled-components';
import DesktopTab from '../../components/DesktopTab';
import MyPagination from '../../components/Pagination';
import AdminRequest from '../../components/AdminRequest';
import { DesktopList } from '../../components/DesktopList';

export default function RequestManage() {
    const [activeTab, setActiveTab] = useState('allRequests');

    const tabData = [
        { eventKey: 'allRequests', title: '전체요청', content: '전체 요청 내용' },
        { eventKey: 'approved', title: '승인', content: '승인된 요청 내용' },
        { eventKey: 'pending', title: '보류', content: '보류된 요청 내용' },
        { eventKey: 'unread', title: '미열람', content: '미열람된 요청 내용' },
    ];

    const requests = {
        allRequests: [1, 2, 3, 4, 5, 6],
        approved: [1, 2],
        pending: [3],
        rejected: [4],
        unread: [],
    };

    const headers = ["접수일자", "이름", "구분", "제목", "처리구분", "승인일자"];
    const contents = [
        {
            접수일자: "2023-10-01",
            이름: "홍길동",
            구분: "문의",
            제목: "서비스 관련 문의",
            처리구분: "대기 중",
            승인일자: "2023-10-03"
        },
        {
            접수일자: "2023-10-01",
            이름: "홍길동",
            구분: "문의",
            제목: "서비스 관련 문의",
            처리구분: "대기 중",
            승인일자: "2023-10-03"
        }
    ];
    const columns = "1fr 0.8fr 0.8fr 2fr 1fr 1fr";

    return (
        <div className="flex" style={{ width: "100vw" }}>
            <div className="desktop-container">
                <div className='flex aiCenter spaceBetween mb1'>
                    <h2> 승인요청내역 </h2>
                    <div><DesktopTab tabData={tabData} setActiveTab={setActiveTab} /></div>
                </div>
                <TotalCount>전체 {requests[activeTab].length}개</TotalCount>

                <DesktopList pathTo={'requestDetail'}  contents={contents} headers={headers} columns={columns} />
                <MyPagination itemsCountPerPage={12} totalItemsCount={requests[activeTab].length} pageRangeDisplayed={5} />
            </div>
        </div>
    );
}

export const PaginationContainer = styled.div`
  grid-column: 1 / -1; 
  display: flex;
  justify-content: center; 
  margin-top: 1rem; 
`;

export const TotalCount = styled.p`
    color : ${(props) => props.theme.colors.gray50};
`;
