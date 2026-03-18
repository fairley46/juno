# Test Strategy

## 1. Schema Tests

- manifest contains required top-level fields
- every module in the manifest points to an existing file
- every exercise reference exists
- survey URL placeholder is present

## 2. State Tests

- first run initializes progress correctly
- repeat run resumes where the learner left off
- restart resets progress safely
- local state path is isolated per workspace

## 3. Feedback Tests

- `/feedback` appends a valid local entry
- module export includes rating and note content
- export output avoids raw diagnostics and sensitive payloads

## 4. Diagnostics Tests

- diagnostics export creates a bundle even when state is partial
- diagnostics do not include secret-like fields
- diagnostics still work when org overlay is missing

## 5. Interaction Tests

- warm errors appear for unknown commands
- invalid rating input returns a kind recovery message
- side-question flow can return the learner to the current module

