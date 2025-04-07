# plantUML
Диаграмма банка


@startuml
User -> Payments : PaymenDocument
Payments -> Accounts:  amount. history
Accounts --> User : JournalList
deactivate Accounts
@enduml0я