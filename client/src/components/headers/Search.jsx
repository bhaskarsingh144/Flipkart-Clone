
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius: 2px;
margin-left: 25px;
display:flex;
`
//const StyledSearchIcon =styled(SearchIcon)'


const InputSearchBase = styled(InputBase)`
padding-left = 0;
width:100%;
font-size: unset;
`

const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px ;
display : flex;
`
const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase placeholder=' Search for Products, Brands and more.' />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

        </SearchContainer>
    )
}

export default Search;