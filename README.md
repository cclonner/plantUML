# plantUML
Диаграмма банка


@startuml
User -> Payment : PaymenDocument
Payment -> Accounts: 
Accounts --> User : JournalList
deactivate Accounts
@enduml