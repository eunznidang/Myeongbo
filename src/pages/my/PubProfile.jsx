import React from "react";
import styled from "styled-components";
import { CgAddR } from "react-icons/cg";
import { postRequest } from "../../apis/axios"; // postRequest 가져오기

export default function PubProfile({
    publisherImg,
    publisherName,
    publisherType,
    publisherUrl,
    publisherId,
    fetchMy // 상태를 업데이트하는 함수 전달
}) {
    // 클릭 핸들러
    const handleSubscribe = async () => {
        try {
            const data = { publisherId };
            console.log("Request data:", data);
    
            const response = await postRequest('/api/subscription/subscribe', data);
            console.log(`${publisherName} 구독 완료`, response);
    
            if (fetchMy) {
                await fetchMy();
            }
        } catch (error) {
            console.error(`Error subscribing to ${publisherName}:`, error.response?.data || error.message);
        }
    };
    
    

    return (
        <ProfileBox onClick={handleSubscribe}>
            <IconWrapper>
                <CgAddR />
            </IconWrapper>

            <PubImg src={publisherImg} alt={`${publisherName} 이미지`} />
            <PubName>{publisherName}</PubName>
        </ProfileBox>
    );
}

const IconWrapper = styled.div`
    position: absolute;
    color: #AEAEB2;
    font-size: 1.5rem;
    z-index: 90;
    display: flex;
`;

const PubName = styled.div`
    text-overflow: ellipsis;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ProfileBox = styled.div`
    margin: 0 auto;
    justify-self: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7rem;
    height: 8.5rem;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        width: 6.5rem;
        height: 7.5rem;
        padding: 0.5rem;
    }
`;

const PubImg = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover; 
    border-radius: 0.5rem;
`;
