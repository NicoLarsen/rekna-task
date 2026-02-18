import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Company, RecurringTaskActivity } from '../types';
import { FINANCIAL_STATEMENTS_TASKS } from '../config/taskMappings';
import StatusCell from './StatusCell';

interface FinancialStatementsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  company: Company;
  activity: RecurringTaskActivity | null;
  onConfirm: (changes: Map<string, string | null>) => void;
}

export default function FinancialStatementsPopup({
  isOpen,
  onClose,
  company,
  activity,
  onConfirm,
}: FinancialStatementsPopupProps) {
  const [localChanges, setLocalChanges] = useState<Map<string, string | null>>(new Map());

  // Reset local changes when opened
  useEffect(() => {
    if (isOpen) {
      setLocalChanges(new Map());
    }
  }, [isOpen]);

  const handleCellClick = (fieldId: string, currentStatus: string | null) => {
    let newStatus: string | null = null;
    if (!currentStatus) newStatus = 'To Do';
    else if (currentStatus === 'To Do') newStatus = 'Done';
    else if (currentStatus === 'Done') newStatus = 'Doing';
    else if (currentStatus === 'Doing') newStatus = 'To Do';

    setLocalChanges((prev) => {
      const updated = new Map(prev);
      updated.set(fieldId, newStatus);
      return updated;
    });
  };

  const handleConfirm = () => {
    onConfirm(localChanges);
    onClose();
  };

  const handleDiscard = () => {
    setLocalChanges(new Map());
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleDiscard} size="md">
      <ModalOverlay />
      <ModalContent bg="gray.800" color="white">
        <ModalHeader>
          {company.name} - Financial Statements
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2} align="stretch">
            {FINANCIAL_STATEMENTS_TASKS.map((task) => {
              const isApplicable = company.checkboxConfig[task.companyCheckboxId] || false;
              const hasActivity = !!activity;
              let status = activity?.statusValues[task.rtStatusFieldId] || null;

              // If activity exists but status is null AND checkbox is checked, assume "To Do"
              if (hasActivity && status === null && isApplicable) {
                status = 'To Do';
              }

              // Apply local changes
              if (localChanges.has(task.rtStatusFieldId)) {
                status = localChanges.get(task.rtStatusFieldId) || null;
              }

              const isChanged = localChanges.has(task.rtStatusFieldId);

              return (
                <HStack
                  key={task.rtStatusFieldId}
                  spacing={3}
                  p={2}
                  borderRadius="md"
                  bg={isChanged ? 'gray.700' : 'transparent'}
                  _hover={{ bg: 'gray.700' }}
                >
                  <Box flexShrink={0}>
                    <StatusCell
                      status={status}
                      isApplicable={isApplicable}
                      isChanged={isChanged}
                      hasActivity={hasActivity}
                      onClick={() => {
                        if (isApplicable && hasActivity) {
                          handleCellClick(task.rtStatusFieldId, status);
                        }
                      }}
                    />
                  </Box>
                  <Text fontSize="sm" flex="1">
                    {task.label}
                  </Text>
                </HStack>
              );
            })}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <HStack spacing={3}>
            <Button colorScheme="gray" onClick={handleDiscard}>
              Discard
            </Button>
            <Button
              bg="#4DB88A"
              color="white"
              _hover={{ opacity: 0.85 }}
              _active={{ opacity: 0.7 }}
              onClick={handleConfirm}
              isDisabled={localChanges.size === 0}
            >
              Confirm
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
