import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'
import React from 'react'

export default function SearchButton() {
  return (


    <form>
      <Box
        display={["none", "none", "flex", "flex"]}
        justifyContent="center"
        alignItems="center"
      >
        <InputGroup>
          <InputLeftElement 
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
          >
            <SearchIcon 
              height="100%" color="#900099" />
          </InputLeftElement>
          <Input
            size="md"
            type="text"
            color="#000"
            borderColor="#900099"
            background="#fff"
            rounded="20px"
            placeholder="Search" />
        </InputGroup>
        

          
      
      </Box>
    </form>

  )
}
