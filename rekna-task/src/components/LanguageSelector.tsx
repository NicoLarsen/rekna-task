import { HStack, Button } from '@chakra-ui/react';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <HStack spacing={0} borderRadius="full" overflow="hidden" border="1px solid" borderColor="gray.600">
      <Button
        size="sm"
        variant="ghost"
        bg={language === 'en' ? '#7BC8A4' : 'transparent'}
        color={language === 'en' ? 'gray.800' : 'gray.400'}
        _hover={{ bg: language === 'en' ? '#7BC8A4' : 'gray.700' }}
        _active={{ bg: language === 'en' ? '#6BAB91' : 'gray.600' }}
        onClick={() => setLanguage('en')}
        borderRadius="0"
        fontWeight="bold"
        fontSize="xs"
        px={3}
        h="28px"
      >
        EN
      </Button>
      <Button
        size="sm"
        variant="ghost"
        bg={language === 'fi' ? '#7BC8A4' : 'transparent'}
        color={language === 'fi' ? 'gray.800' : 'gray.400'}
        _hover={{ bg: language === 'fi' ? '#7BC8A4' : 'gray.700' }}
        _active={{ bg: language === 'fi' ? '#6BAB91' : 'gray.600' }}
        onClick={() => setLanguage('fi')}
        borderRadius="0"
        fontWeight="bold"
        fontSize="xs"
        px={3}
        h="28px"
      >
        FI
      </Button>
    </HStack>
  );
}
