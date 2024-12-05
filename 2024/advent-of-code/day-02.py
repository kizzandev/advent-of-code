import unittest

# Safe if both of the following are true:
# - The levels are either all increasing or all decreasing.
# - Any two adjacent levels differ by at least one and at most three


def is_safe(levels: list[int]) -> bool:
    if len(levels) < 2:
        return True

    is_increasing = levels[0] < levels[1]
    for level in range(1, len(levels)):
        diff = levels[level] - levels[level - 1]
        keeps_direction = diff > 0 if is_increasing else diff < 0
        if diff == 0 or abs(diff) > 3 or not keeps_direction:
            return False
    return True


def get_safe_reports(reports: list[list[int]]) -> int:
    return sum(is_safe(levels) for levels in reports)


def get_safe_reports_part2(reports: list[list[int]]):
    safe_reports = 0

    for levels in reports:
        if is_safe(levels):
            safe_reports += 1
            continue

        is_valid = any(
            is_safe(levels[:i] + levels[i + 1 :]) for i in range(len(levels))
        )

        if is_valid:
            safe_reports += 1

    return safe_reports


class TestAll(unittest.TestCase):
    def test_is_safe_part1_example(self):
        with open("day-02-input-test.txt", "r") as f:
            reports = [list(map(int, line.split())) for line in f]
        self.assertEqual(get_safe_reports(reports), 2)

    def test_is_safe_part1(self):
        with open("day-02-input.txt", "r") as f:
            reports = [list(map(int, line.split())) for line in f]
        self.assertEqual(get_safe_reports(reports), 220)

    def test_is_safe_part2_example(self):
        with open("day-02-input-test.txt", "r") as f:
            reports = [list(map(int, line.split())) for line in f]
        self.assertEqual(get_safe_reports_part2(reports), 4)

    def test_is_safe_part2(self):
        with open("day-02-input.txt", "r") as f:
            reports = [list(map(int, line.split())) for line in f]
        self.assertEqual(get_safe_reports_part2(reports), 296)


if __name__ == "__main__":
    unittest.main()
