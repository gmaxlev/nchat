psql -f install.sql -U example -d example
PGPASSWORD=marcus psql -d example -f structure.sql -U marcus
PGPASSWORD=marcus psql -d example -f data.sql -U marcus
