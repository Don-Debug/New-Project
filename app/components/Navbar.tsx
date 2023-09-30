"use client"
import { Box, Flex, Text, Button, Avatar, IconButton, Tooltip } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { ViewIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [showBalance, setShowBalance] = useState(false);
  const balance = "$43"; // Replace with your actual balance
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="black"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          AMONGUS
        </Text>
      </Flex>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
      >
        <Tooltip label={showBalance ? "Hide balance" : "Show balance"} placement="top">
          <IconButton 
            aria-label={showBalance ? "Hide balance" : "Show balance"} 
            icon={showBalance ?  <Text>{balance}</Text> : <ViewIcon />} 
            colorScheme="black" 
            variant="outline" 
            mr={4} 
            onClick={() => setShowBalance(!showBalance)}
          />
        </Tooltip>
        
        {showBalance}
        
        <Avatar 
          size="md" 
          name="Profile Picture" 
          src="" 
          onClick={() => router.push('/profile')}
          cursor="pointer"
        />
      </Box>
    </Flex>
  );
}
