# SRS — Todos

Module: `todos`
Last updated: 2026-08-11
Design: [View Design](http://localhost:8080/design/4604207d-02a1-4652-a33e-205b86b35922)
Design system: `design/design-system.md`

## 1. Purpose

The `todos` module lets a visitor manage a simple personal todo list on a single page without signing in. It is the core product area for "Todo List App": without it, users cannot add, see, complete, preserve, or remove tasks. The module must make each task action immediately visible and persist changes across refreshes and new browser sessions.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| User | Any visitor using the app with no login | View the shared todo list, add tasks, mark tasks complete or incomplete, and delete tasks |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Add todo tasks
- Persist todo tasks
- Complete todo tasks
- Delete todo tasks

**Out of scope** — items a reader may reasonably expect but are not part of this module:

- User accounts and login — deliberately not built; the app is single-page and no-login.
- Per-user private todo lists — deliberately not built; there is no authenticated identity to separate lists.
- Due dates, priorities, tags, search, sorting, and filtering — deliberately not built for the minimal todo scope.
- Collaboration, sharing, notifications, and reminders — deliberately not built for the minimal todo scope.
- Bulk actions and undo — deliberately not built; each task is acted on individually.

## 4. Functional requirements

### 4.1 Add todo tasks

**Requirement TODOS-001 — Add a non-empty todo**

*As a* User, *I want to* add a task title, *so that* the new task appears in my todo list as incomplete.

Behaviour:

1. The User opens the single-page todo app and sees a task title input and submit control.
2. The User enters a non-empty task title and submits it.
3. The system trims leading and trailing whitespace before validating and saving the title.
4. The system creates one new incomplete task and shows it in the visible list without requiring a page refresh.
5. The system clears the input after a successful add.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/todos/test-cases/add-todo-tasks.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The User is on the todo page and the task input is empty | The User enters `Buy milk` and submits | A new visible task titled `Buy milk` appears in the list as incomplete |
| AC-2 | The User is on the todo page | The User enters `  Buy milk  ` and submits | A new visible task titled `Buy milk` appears without leading or trailing spaces |
| AC-3 | A task is successfully added | The add operation completes | The task input is cleared |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | The submitted title is empty or contains only whitespace | An inline error is shown near the input, no task is saved, and the list is unchanged |
| Boundary | The trimmed title is 1 character | The task is accepted and displayed |
| Boundary | The trimmed title is 200 characters | The task is accepted and displayed |
| Boundary | The trimmed title is more than 200 characters | An inline error states that the title must be 200 characters or fewer, no task is saved, and the list is unchanged |
| Permission | The actor is any User with no login | The add action is allowed |
| Upstream failure | The save cannot complete | A visible error message is shown, the input value remains available for retry, and no unsaved task is presented as persisted |
| Duplicate title | The submitted title matches an existing task title | The task is accepted as a separate todo item |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Todo identifier | identifier | yes | Generated for each created task and stable for later complete/delete actions |
| Title | text | yes | Trimmed; length must be 1 to 200 characters inclusive; duplicates allowed |
| Completion state | boolean | yes | New tasks are created as incomplete |
| Created time | date-time | yes | Recorded when the task is created |
| Updated time | date-time | yes | Recorded when the task is created and when it changes |

### 4.2 Persist todo tasks

**Requirement TODOS-002 — Load persisted todos**

*As a* User, *I want to* see previously saved tasks when I open the app, *so that* my todo list remains available across refreshes and sessions.

Behaviour:

1. The User opens or refreshes the single-page todo app.
2. The system loads the persisted todo tasks.
3. The system displays all persisted tasks with their title and completion state.
4. If no tasks exist, the system displays an empty state instead of a blank list.
5. The system preserves task data across browser refreshes and new sessions without requiring login.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/todos/test-cases/persist-todo-tasks.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | At least one task has been saved | The User opens the todo page | The saved task appears with the same title and completion state |
| AC-2 | A task has been added successfully | The User refreshes the page | The task still appears in the list |
| AC-3 | A task has been added successfully in a previous browser session | The User opens a new session and visits the page | The task still appears in the list |
| AC-4 | No tasks exist | The User opens the todo page | An empty state is displayed and no task rows are shown |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Empty data | No persisted tasks exist | The app shows the designed empty state with guidance to add a first task |
| Loading | Persisted tasks are still being loaded | The app shows a reachable loading state until the list or empty state is ready |
| Upstream failure | Persisted tasks cannot be loaded | The app shows an error state with a retry option and does not show stale data as confirmed current data |
| Permission | The actor is any User with no login | The list load is allowed |
| Boundary | 100 tasks exist | The page displays the tasks without horizontal page scroll and remains usable |
| Data integrity | A persisted task has an identifier, title, and completion state | The task is displayed using those persisted values |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Todo identifier | identifier | yes | Used to distinguish tasks while loading and acting on them |
| Title | text | yes | Displayed exactly as saved after validation and trimming |
| Completion state | boolean | yes | Displayed as complete or incomplete |
| Created time | date-time | yes | Available for stable ordering |
| Updated time | date-time | yes | Available for state freshness |
### 4.3 Complete todo tasks

**Requirement TODOS-003 — Toggle todo completion**

*As a* User, *I want to* mark a visible task complete or incomplete, *so that* the list reflects the task's current status.

Behaviour:

1. The User views a persisted task in the todo list.
2. The User activates the completion control for that task.
3. The system changes the task from incomplete to complete, or from complete to incomplete.
4. The system visually reflects the new completion state in the list.
5. The system saves the new completion state so it remains after refresh.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/todos/test-cases/complete-todo-tasks.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A visible task is incomplete | The User marks the task complete | The task is shown as complete |
| AC-2 | A visible task is complete | The User marks the task incomplete | The task is shown as incomplete |
| AC-3 | A task completion state has changed successfully | The User refreshes the page | The task appears with the changed completion state |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Not found | The target task no longer exists | The app removes the missing task from the visible list or shows a not-found message for the action, and no unrelated task changes |
| Permission | The actor is any User with no login | The complete/uncomplete action is allowed |
| Conflict | The same task is changed twice before the first save has completed | The final visible state matches the last completed successful action, and the user is shown an error if any requested change fails |
| Upstream failure | The completion change cannot be saved | A visible error message is shown and the task returns to its last confirmed persisted state |
| Boundary | The list has one task | The task can still be toggled without changing list layout |
| Boundary | The list has 100 tasks | The selected task can be toggled without changing unrelated tasks |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Todo identifier | identifier | yes | Identifies the task being changed |
| Completion state | boolean | yes | Can be changed between complete and incomplete |
| Updated time | date-time | yes | Changes when completion state changes |

### 4.4 Delete todo tasks

**Requirement TODOS-004 — Delete a todo**

*As a* User, *I want to* delete a visible task, *so that* tasks I no longer need are removed from the list permanently.

Behaviour:

1. The User views a persisted task in the todo list.
2. The User activates the delete control for that task.
3. The system removes the task from the visible list after the delete succeeds.
4. The system removes the task from persistence so it remains gone after refresh.
5. If the deleted task was the last task, the system displays the empty state.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/todos/test-cases/delete-todo-tasks.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A visible task exists | The User deletes the task | The task is removed from the visible list |
| AC-2 | A task has been deleted successfully | The User refreshes the page | The deleted task does not reappear |
| AC-3 | A single visible task exists | The User deletes the task | The empty state is displayed |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Not found | The target task has already been deleted | The task is absent from the visible list, a non-blocking message may be shown, and no unrelated task changes |
| Permission | The actor is any User with no login | The delete action is allowed |
| Upstream failure | The delete cannot be saved | A visible error message is shown and the task remains in or returns to the visible list |
| Boundary | The list has one task | Deleting the task shows the empty state |
| Boundary | The list has 100 tasks | Deleting one task removes only that task and leaves the others visible |
| Irreversible action | A task is deleted | The app does not provide undo in this scope |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Todo identifier | identifier | yes | Identifies the task being deleted |
| Title | text | yes | Used to render the task before deletion |
| Completion state | boolean | yes | Used to render the task before deletion |

## 5. Screens

## Design

Design preview: [View Design](http://localhost:8080/design/4604207d-02a1-4652-a33e-205b86b35922)

Approved design summary:

- Color palette: #2563EB primary, #F9FAFB background, #FFFFFF surface, #10B981 accent, #EF4444 danger.
- Single-page Todo App: hero, interactive todo panel, reachable loading/empty/error states, and feature details for add, persist, complete, and delete flows.

The design is the source of truth for appearance; this section maps functions onto it so nothing in the design is unaccounted for and nothing specified here is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Single-page Todo App | Hero | TODOS-001, TODOS-002, TODOS-003, TODOS-004 | default |
| Todo panel | Interactive todo panel | TODOS-001, TODOS-002, TODOS-003, TODOS-004 | default, loading, empty, error, invalid input |
| Feature details | Feature details for add, persist, complete, and delete flows | TODOS-001, TODOS-002, TODOS-003, TODOS-004 | default |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Initial todo list load completes within 2 seconds for up to 100 persisted tasks on a typical broadband connection |
| Performance | Add, complete/uncomplete, and delete actions show a success result or error result within 2 seconds under normal service conditions |
| Accessibility | The task input, submit control, completion control, delete control, retry control, and error messages are keyboard reachable, have visible focus, and use accessible labels or text |
| Accessibility | Text and interactive controls meet contrast ratio of at least 4.5:1 against their background |
| Responsive | The single page works from 320px viewport width upward with no horizontal page scroll |
| Localisation | User-facing copy is in English |
| Privacy | Todo titles are stored because they are the user's task content; no login profile, email address, or other personal account data is collected |
| Reliability | After a confirmed successful add, completion toggle, or delete, the resulting state remains the same after page refresh |

## 7. Dependencies and assumptions

- **Depends on:** A database-backed persistence layer, for storing todo tasks across refreshes and sessions.
- **Depends on:** The approved single-page design, for layout, colors, and visible loading/empty/error states.
- **Assumption:** Because there is no login, all visitors interact with the same persisted todo list. If private per-user lists are later required, authentication and user ownership become new scope.
- **Assumption:** Task ordering uses newest-created-first unless TL identifies an existing project convention that requires a different stable ordering.

| Open question | Proposed default | Who decides |
|---|---|---|
| Should deletes require a confirmation prompt? | No confirmation prompt for the minimal app; deletion is immediate and irreversible in this scope | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Add todo tasks | TODOS-001 | `docs/todos/test-cases/add-todo-tasks.md` |
| Persist todo tasks | TODOS-002 | `docs/todos/test-cases/persist-todo-tasks.md` |
| Complete todo tasks | TODOS-003 | `docs/todos/test-cases/complete-todo-tasks.md` |
| Delete todo tasks | TODOS-004 | `docs/todos/test-cases/delete-todo-tasks.md` |
