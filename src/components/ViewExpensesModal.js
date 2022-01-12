import { Modal, Button } from "react-bootstrap";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";

export default function ViewExpensesModal({ show, handleClose, budgetId }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>Expenses - {budget.name}</div>
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="max">
          <Form.Label>Maximum Spending</Form.Label>
          <Form.Control
            ref={maxRef}
            type="number"
            required
            min={0}
            step={0.01}
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="submit" variant="primary">
            Add
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
