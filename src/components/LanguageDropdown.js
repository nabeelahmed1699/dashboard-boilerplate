// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import TranslateIcon from '@mui/icons-material/Translate';

// ** Third Party Import
import { useTranslation } from 'react-i18next'

const LanguageDropdown = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hook
  const { i18n } = useTranslation()

  // ** Vars
  const { layout, direction } = {layout:"vertical",direction:"ltr"}
 

  const handleLangDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleLangItemClick = lang => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      <IconButton
        color='inherit'
        aria-haspopup='true'
        aria-controls='customized-menu'
        onClick={handleLangDropdownOpen}
        sx={layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }}
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem
          sx={{ py: 1 }}
          selected={i18n.language === 'en'}
          onClick={() => {
            handleLangItemClick('en')
          }}
        >
          English
        </MenuItem>

        <MenuItem
          sx={{ py: 1 }}
          selected={i18n.language === 'sp'}
          onClick={() => {
            handleLangItemClick('sp')
          }}
        >
          Spanish
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default LanguageDropdown
