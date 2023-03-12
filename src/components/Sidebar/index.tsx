import ProfileImage from 'components/ProfileImage';
import * as S from './styles';

export const Sidebar: React.FC = () => {
    return (
        <S.Sidebar>
            <S.Icon src="/assets/icons/Logo.svg" height="92px" width="102px" />
            <S.MenuWrapper>
                <S.MenuItem selected>
                    <S.Icon
                        src="/assets/icons/FilledHouse.svg"
                        height="32px"
                        width="32px"
                    />
                    <span>Página principal</span>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Icon
                        src="/assets/icons/Search.svg"
                        height="32px"
                        width="32px"
                    />
                    <span>Explorar</span>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Icon
                        src="/assets/icons/E-mail.svg"
                        height="32px"
                        width="32px"
                    />
                    <span>Mensagens</span>
                </S.MenuItem>
                <S.MenuItem>
                    <S.Icon
                        src="/assets/icons/Bookmark.svg"
                        height="32px"
                        width="32px"
                    />
                    <span>Itens Salvos</span>
                </S.MenuItem>
            </S.MenuWrapper>
            <S.ProfileWrapper>
                <ProfileImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8Ea9cyIi_U8y7mgzqX1SitKtppQOzlciXA&usqp=CAU"
                    size="112px"
                />
                <S.ProfileName>Cauan Kazama</S.ProfileName>
                <S.ProfileHandle>@caukazama</S.ProfileHandle>
                <S.Icon
                    src="/assets/icons/LogOut.svg"
                    height="32px"
                    width="32px"
                />
            </S.ProfileWrapper>
        </S.Sidebar>
    );
};

export default Sidebar;
