import unittest
import re
import enum

# goal: multiply some numbers
# instructions like mul(X,Y) which are 1-3 digit numbers
# to ignore:
# - mul(4*
# - mul(6,9!
# - ?(12,34)
# - mul ( 2 , 4 )

Part = enum.Enum("Part", "PART1 PART2")


def part1(line: str) -> int:
    regex = re.compile(r"mul\((\d{1,3}),(\d{1,3})\)")
    matches: list[str] = regex.findall(line)
    if not matches:
        return 0
    return sum(int(x) * int(y) for x, y in matches)


def part2(line: str, is_active) -> int:
    regex = re.compile(
        r"(?P<mul>mul\((\d{1,3}),(\d{1,3})\))|(?P<dont>don't\(\))|(?P<do>do\(\))"
    )
    matches = regex.findall(line)
    if not matches:
        return 0

    result = 0
    for match in matches:
        mul, x, y, dont, do = match
        if dont:
            is_active = False
        elif do:
            is_active = True
        elif is_active and mul:
            result += int(x) * int(y)

    return result, is_active


def get_sum(instructions: list[str], Part: Part) -> int:
    if Part == Part.PART1:
        return sum(part1(instruction) for instruction in instructions)
    elif Part == Part.PART2:
        is_active = True
        result = 0
        for instruction in instructions:
            res, is_active = part2(instruction, is_active)
            result += res
        return result


class TestAll(unittest.TestCase):
    def test_part1_example(self):
        with open("day-03-input-test.txt", "r") as f:
            instructions = [line.strip() for line in f]
        self.assertEqual(get_sum(instructions, Part.PART1), 161)

    def test_part1(self):
        with open("day-03-input.txt", "r") as f:
            instructions = [line.strip() for line in f]
        self.assertEqual(get_sum(instructions, Part.PART1), 173731097)

    def test_part2_example(self):
        with open("day-03-input-test2.txt", "r") as f:
            instructions = [line.strip() for line in f]
        self.assertEqual(get_sum(instructions, Part.PART2), 48)

    def test_part2(self):
        with open("day-03-input.txt", "r") as f:
            instructions = [line.strip() for line in f]
        self.assertEqual(get_sum(instructions, Part.PART2), 93729253)


if __name__ == "__main__":
    unittest.main()
