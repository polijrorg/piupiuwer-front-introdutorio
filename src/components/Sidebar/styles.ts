import styled from 'styled-components';
import Image from 'next/image';

interface MenuItemProps {
    selected?: boolean;
}

export const Sidebar = styled.div`
    height: 100%;
    width: 295px;
    padding: 72px 24px;

    position: fixed;
    top: 0;
    left: 0;

    background-color: ${({ theme }) => theme.colors.sky2};
    border-radius: 0 48px 48px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const MenuItem = styled.div<MenuItemProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    & > span {
        font-family: ${({ selected }) =>
            selected ? 'Poppins Bold' : 'Poppins Regular'};
        color: ${({ theme }) => theme.colors.white};
        font-size: 20px;
    }
`;

export const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileName = styled.h1`
    font-family: 'Poppins SemiBold';
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
`;

export const ProfileHandle = styled.span`
    font-family: 'Poppins Regular';
    color: ${({ theme }) => theme.colors.slate11};
    font-size: 14px;
    margin-bottom: 16px;
`;

export const Icon = styled(Image)``;
