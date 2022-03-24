select count(*)
from "inventory"
join "films" using ("filmId");
