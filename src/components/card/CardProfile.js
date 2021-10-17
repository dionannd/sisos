import { Box } from "@chakra-ui/react";

const CardProfile = ({ children }) => {
  return (
    <Box px={4} py={3} mb={8}>
      {children}
    </Box>
  );
};

export default CardProfile;
